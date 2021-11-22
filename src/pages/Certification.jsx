import {Component} from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import BackButton from '../components/BackButton';
import Content from '../components/Content';
/*
  PASS / 전화번호 인증 모듈 추가 필요
*/
class Certification extends Component {
  confirmData = () => {
    this.props.onNext && this.props.onNext();
  }

  render() {
    return (
      <>
        <Title onBack={this.props.onBack}>Certification</Title>
        <Content>
          <PrimaryButton onClick={this.confirmData}>확인</PrimaryButton>
        </Content>
      </>
    )
  }
}

Certification.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
}

export default Certification;