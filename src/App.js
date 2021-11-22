import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import QrScanner from './pages/QrScanner';
import ConfirmQrData from './pages/ConfirmQrData';
import ConfirmTerms from './pages/ConfirmTerms';
import Certification from './pages/Certification';
import PrepareTakePicture from './pages/PrepareTakePicture';
import TakePicture from './pages/TakePicture';
import ConfirmPicture from './pages/ConfirmPicture';
import ResultPage from './pages/ResultPage';
import ConfirmSubmit from './pages/ConfirmSubmit';
import Layout from './components/Layout';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  const [step, setStep] = useState(0);

  const [datas, setDatas] = useState([]);

  const handleNext = (data) => {
    setStep(step + 1);
    setDatas([...datas, data]);
  }

  const handleGo = (goStep) => {
    if(step < goStep) {
      alert('App Error ::: 001');
      return;
    }

    setDatas(datas.slice(0, goStep));
    setStep(goStep);
  }

  const handleBack = () => {
    setStep(step - 1);
    setDatas(datas.slice(0, (step - 1)));
  }

  return (
    <Layout>
      {step === 0 && <QrScanner onNext={handleNext} />}
      {step === 1 && <ConfirmQrData onNext={handleNext} onBack={handleBack} data={datas[0]} />}
      {step === 2 && <ConfirmTerms onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <Certification onNext={handleNext} onBack={handleBack} />}
      {step === 4 && <PrepareTakePicture onNext={handleNext} onBack={handleBack} />}
      {step === 5 && <TakePicture onNext={handleNext} onBack={handleBack} />}
      {step === 6 && <ConfirmPicture onNext={handleNext} onBack={handleBack} image={datas[5]} />}
      {step === 7 && <ConfirmSubmit onNext={handleNext} onBack={handleBack} />}
      {step === 8 && <ResultPage onNext={handleNext} onBack={handleBack} onGo={handleGo} takePictureStep={4} />}
    </Layout>
  );
}

export default App;