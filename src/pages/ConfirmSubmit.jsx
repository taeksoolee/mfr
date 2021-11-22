import {Component} from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import Content from '../components/Content';

class ConfirmSubmit extends Component {
  confirmData = () => {
    this.props.onNext && this.props.onNext();
  }

  render() {
    return (
      <>
        <Title onBack={this.props.onBack}>ConfirmSubmit</Title>
        <Content>
          <PrimaryButton onClick={this.confirmData}>확인</PrimaryButton>
        </Content>
      </>
    )
  }
}

ConfirmSubmit.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
}

export default ConfirmSubmit;