import React, { Component } from 'react'
import PropTypes from 'prop-types';

import QrReader from 'react-qr-reader'
import Title from '../components/Title';
import Content from '../components/Content';
import api from '../api';


class QrScanner extends Component {
  // state = {
  //   qr: '',
  // }

  componentDidMount() {
    setTimeout(() => {
      this.props.onNext && this.props.onNext(null);
    }, 1000);
  }

  handleScan = async (data) => {
    if (data) {
      
      const qr = await api.qr.decodeQr(data);
      // this.setState({qr: JSON.stringify(qr)});
      this.props.onNext && this.props.onNext(qr);
    }
  }

  handleError = err => {
    alert(err);
    console.error(err)
  }

  render() {
    return (
      <>
        <Title onBack={this.props.onBack}>QrScanner</Title>
        <Content>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%'}}
          />
          {/* {this.state.qr} */}
        </Content>
      </>
    )
  }
}

QrScanner.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
}

export default QrScanner;