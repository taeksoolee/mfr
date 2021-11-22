import {Component} from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import Content from '../components/Content';
import styled from 'styled-components';

const TextItem = styled.div`
  width: calc(100% - 8rem);
  text-align: center;
  margin: 3rem;
  padding: 1rem;
  border: 1px solid rgba(0,0,0,.5);
  border-radius: 50px;
  height: 1rem;
`;

class ConfirmQrData extends Component {
  componentDidMount() {
    
  }

  compoUpdate() {
    console.log(this.props.data);
    if(this.props.data) {
      this.setState({qrData: this.props.data});
    }
  }

  confirmData = () => {
    this.props.onNext && this.props.onNext();
  }

  render() {
    return (
      <>
        <Title onBack={this.props.onBack}>ConfirmQrData</Title>
        <Content>
          <TextItem>{this.props.data && this.props.data.title}</TextItem>
          <PrimaryButton onClick={this.confirmData}>확인</PrimaryButton>
        </Content>
      </>
    )
  }
}

ConfirmQrData.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  data: PropTypes.object,
}

export default ConfirmQrData;