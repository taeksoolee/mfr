import {Component} from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import Content from '../components/Content';

class ConfirmPicture extends Component {
  componentDidMount() {
    console.log(this.props.image);
  }

  confirmData = () => {
    this.props.onNext && this.props.onNext();
  }

  render() {
    return (
      <>
        <Title onBack={this.props.onBack}>ConfirmPicture</Title>
        <Content>
          {this.props.image && <img src={this.props.image} alt={''} />}
          <PrimaryButton onClick={this.confirmData}>확인</PrimaryButton>
        </Content>
      </>
    )
  }
}

ConfirmPicture.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  image: PropTypes.string.isRequired,
}

export default ConfirmPicture;