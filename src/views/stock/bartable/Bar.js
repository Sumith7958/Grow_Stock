import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import SkeletonBar from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';

const Bar = ({ isLoading, jsondata, data }) => {
  
  const filteredCategories = jsondata.categories.filter(category => category === data[0] || category === data[1]);
  const categories = jsondata["time_periods"];
  const series = filteredCategories.map(category => ({
    name: category,
    data: jsondata.values[category].map(value => parseFloat(value.replace(',', '')))
  }));

  const chartData = {
      height: 300,
      type: 'bar',
      options: {
        chart: {
          id: 'bar-chart',
          stacked: false,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '70%',
            dataLabels: {
              position: 'top', // top, center, bottom
            }
          }
        },
        xaxis: {
          type: 'category',
          categories: categories
        },
        yaxis: {
          show: true // Hide y-axis
        },
        legend: {
          show: true,
          fontSize: '14px',
          fontFamily: `'Roboto', sans-serif`,
          position: 'bottom',
          offsetX: 20,
          labels: {
            useSeriesColors: false
          },
          markers: {
            width: 16,
            height: 16,
            radius: 5
          },
          itemMargin: {
            horizontal: 16,
            vertical: 8
          }
        },
        fill: {
          type: 'solid'
        },
        dataLabels: {
          enabled: true,
          offsetY: -20,
          style: {
              colors: ['#000']
          },
        },
        grid: {
          show: true
        }
      },
      series: series
    }

  return (
    <>
      {isLoading ? (
        <SkeletonBar />
      ) : (
        <MainCard>
            <Chart {...chartData} />
        </MainCard>
      )}
    </>
  );
};

Bar.propTypes = {
  isLoading: PropTypes.bool
};

export default Bar;