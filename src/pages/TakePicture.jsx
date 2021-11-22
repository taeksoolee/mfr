import {Component} from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

import { dataURLtoFile } from '../utils';
import WebCamScreen from '../components/WebCamScreen';
import BackButton from '../components/BackButton';
import Content from '../components/Content';
import styled from 'styled-components';

const WireMan = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({detacted}) => (detacted ? 'black' : 'red')};
`;

const videoConstraints = {
  width: window.outerWidth,
  height: window.outerWidth,
  facingMode: "user"
};

class TakePicture extends Component {
  imageFile = null;

  state = {
    detacted: false,
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  detact = async (source) => {
    // 사진을 화면에 표시함
    const image = await window.faceapi.bufferToImage(source);
    // container.append(image)

    // 사진에서 얼굴을 식별한다.
    const detections = await window.faceapi.detectAllFaces(image)
                            .withFaceLandmarks()
                            .withFaceDescriptors()
    
    return detections;
  }

  handleStream = async (source) => {
    if(source) {
      const result = await this.detact(dataURLtoFile(source, 'capture'));
      const d = result.length === 1;
      if(d !== this.state.detacted) {
        console.log('result');
        this.setState({detacted: d});
      }

      this.imageFile = source;
    }
  }

  confirmData = () => {
    if(this.imageFile) {
      this.props.onNext && this.props.onNext(this.imageFile);
    } else {
      alert('사진 촬영 실패');
    }
  }

  render() {
    return (
      <>
        <Title onBack={this.props.onBack}>TakePicture</Title>
        <Content>
          <WireMan detacted={this.state.detacted} />
          <WebCamScreen
            onStream={this.handleStream}
            videoConstraints={videoConstraints}
          />
          <PrimaryButton onClick={this.confirmData}>확인</PrimaryButton>
        </Content>
      </>
    )
  }
}

TakePicture.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
}

export default TakePicture;