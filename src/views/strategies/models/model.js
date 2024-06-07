import { Grid,Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import ModelBox from './modelbox';
//import Skeleton from '@mui/material/Skeleton';
//import Stack from '@mui/material/Stack';
import React, {useState } from 'react';
import Skull from './load.js'

const para_model="The ARIMA model, the CNN with Attention mechanism, the LSTM network, and XGBoost regressor in a non-linear relationship, and improves the prediction accuracy. The model can capture the information of the stock market in multiple periods. The stock data isfirst preprocessed through ARIMA. Then, the deep learning architecture formed in pretraining-finetuning framework is adopted. The pre-training model is the Attention-based CNNLSTM model based on sequence-to-sequence framework. The model first uses attention-based multi-scale convolution to extract the deep features, and then uses the LSTM networks to mine the time series features. Finally, the XGBoost model is adopted for fine-tuning. The results show that the hybrid model is more effective."
const para_lstm="Long Short-Term Memory (LSTM) networks are a type of recurrent neural network (RNN) particularly well-suited for time series prediction tasks, such as stock market forecasting. Unlike traditional feedforward neural networks, LSTMs have a unique architecture that allows them to maintain and update a memory cell over long sequences, which helps them capture temporal dependencies and trends. This ability to remember long-term patterns makes LSTMs highly effective for predicting stock prices, which often depend on historical data and trends. By learning from past stock prices and other relevant features, an LSTM network can make informed predictions about future stock movements, potentially aiding in investment decisions and risk management."
const para_Arima="The AutoRegressive Integrated Moving Average (ARIMA) model is a popular statistical method used for time series forecasting, including stock market prediction. ARIMA models combine three key components: autoregression (AR), differencing (I) to make the time series stationary, and moving average (MA). The autoregressive part leverages the dependency between an observation and a number of lagged observations (previous time steps), the integrated part involves differencing the observations to make the time series stationary, and the moving average part models the relationship between an observation and a residual error from a moving average model applied to lagged observations."
const para_xg="XGBoost (Extreme Gradient Boosting) is a powerful and efficient implementation of the gradient boosting framework, widely used for various machine learning tasks, including stock prediction. It works by building an ensemble of decision trees sequentially. This iterative process helps the model capture complex patterns and interactions in the data. XGBoost is known for its scalability, flexibility, and ability to handle large datasets with high dimensionality. In the context of stock prediction, XGBoost can effectively incorporate various features such as historical prices, trading volumes, technical indicators, and macroeconomic variables to generate accurate forecasts, making it a valuable tool for financial analysts and traders."
const Model = ({datastock}) => {
  console.log(datastock)
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  

  return (
    <div>
    {loading ? (
      <Skull />
    ) : (
    
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <MainCard>
            <Typography sx={{ fontSize: '2rem', fontWeight: 500 }}>{datastock.daydata.name}</Typography>
          </MainCard>
        </Grid>
        <Grid item xs={12}> <ModelBox name={"Attention-CNN-LSTM-XGBoost-stock-prediction" } para={para_model} price={datastock.model}/> </Grid>
        <Grid item xs={12}> <ModelBox name={"Autoregressive Integrated Moving Average (ARIMA)"} para={para_Arima} price={datastock.arima}/> </Grid>
        <Grid item xs={12}> <ModelBox name={"LSTMs Long Short-Term Memory"} para={para_lstm} price={datastock.lstm}/> </Grid>
        <Grid item xs={12}> <ModelBox name={"XGBoost (eXtreme Gradient Boosting)"} para={para_xg} price={datastock.xgboost} /> </Grid>
        
      </Grid>
    )}
    </div>
  );
};

export default Model;
