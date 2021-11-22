import {Component} from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import styled from 'styled-components';
import Content from '../components/Content';

const ButtonsWrapper = styled.div`
  display: flex;
`;

class ResultPage extends Component {
  confirmData = () => {
    this.props.onNext && this.props.onNext();
  }

  goFirst = () => {
    this.props.onGo && this.props.onGo(0);
  }

  goTakePicture = () => {
    this.props.onGo && this.props.onGo(this.props.takePictureStep);
  }

  render() {
    return (
      <>
        <Title onBack={this.props.onBack}>ResultPage</Title>
        <Content>
          <ButtonsWrapper>
            <PrimaryButton width={50} padding={1} onClick={this.goFirst}>처음으로</PrimaryButton>
            <PrimaryButton width={50} padding={1} onClick={this.goTakePicture}>다시 촬영하기</PrimaryButton>
          </ButtonsWrapper>
        </Content>
      </>
    )
  }
}

ResultPage.propTypes = {
  onNext: PropTypes.func,
  onGo: PropTypes.func,
  onBack: PropTypes.func,
  takePictureStep: PropTypes.number,
}

export default ResultPage;