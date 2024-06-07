import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import stockdata from './stockdata'
import indicatordata from './indicatordata'
import modeldata from './modeldata'
// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

//Market live
const IndexContribution = Loadable(lazy(() => import('views/market-live/index-contribution')));
const SectorCharts =Loadable(lazy(() => import('views/market-live/sector-charts')));
const TopGainLose = Loadable(lazy(() => import('views/market-live/top-gain-lose')));
const SectorPerform = Loadable(lazy(() => import('views/market-live/sector-perform')));

// Market routing
//const MarketStock = Loadable(lazy(() => import('views/market/index')));
const AllStock = Loadable(lazy(() => import('views/allstocks/index')));
const AllStockstrategy = Loadable(lazy(() => import('views/allstocks/index2')));
const StockData=Loadable(lazy(() => import('views/stock')));  //all the stocks are here


//strategies


const Indicator=Loadable(lazy(() => import('views/strategies/indicators/indicators')));
const Model=Loadable(lazy(() => import('views/strategies/models/model')));



const generateStocksdataRoutes = () => {
  return Object.keys(stockdata).map(stockSymbol => ({
    path: `${stockSymbol}`,
    element: <StockData stock={stockdata[stockSymbol]} />
  }));
};
const generateindicators = () => {
  return Object.keys(indicatordata).map(stockSymbol => ({
    path: `${stockSymbol}`,
    element: <Indicator datastock={indicatordata[stockSymbol]}/>
  }));
};
// add the data so it will work
const generatemodel = () => {
  return Object.keys(modeldata).map(stockSymbol => ({
    path: `${stockSymbol}`,
    element: <Model datastock={modeldata[stockSymbol]}/>
  }));
};

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'market',
      children: [
        {
          path: 'top-gainers-losers',
          element: <TopGainLose />
        }
      ]
    },
    {
      path: 'market',
      children: [
        {
          path: 'sector-performance',
          element: <SectorPerform />
        }
      ]
    },
    {
      path: 'market',
      children: [
        {
          path: 'index-contribution',
          element: <IndexContribution />
        }
      ]
    },
    {
      path: 'market',
      children: [
        {
          path: 'sector-charts',
          element: <SectorCharts />
        }
      ]
    },
    {
      path: 'strategy',
      element: <AllStockstrategy />
    },
    {
      path: 'strategy',
      children: [
        {
          path: 'indicator',
          element: <Indicator datastock={indicatordata["APOLLOHOSP.NS"]}/>
        }
      ]
    },
    {
      path: 'strategy',
      children: [
        {
          path: 'model',
          element: <Model datastock={modeldata["APOLLOHOSP.NS"]}/>
        }
      ]
    },
    {
      path: 'strategy/indicator',
      children:[
        ...generateindicators()
      ]
    },
    {
      path: 'strategy/model',
      children:[
        ...generatemodel()
      ]
    },
    {
      path: 'stock',
      element: <AllStock />
    },
    {
      path : 'stock',
      children:[
        ...generateStocksdataRoutes()
      ]
    }
    
  ]
};

export default MainRoutes;
