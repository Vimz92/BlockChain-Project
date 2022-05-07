import React from 'react'
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const styles ={
  wrapper:  'flex justify-between p-5 hover:bg-[red]',
  container:  'flex flex-col text-white items-center justify-center',
  name:  'font-bold',
  chart:  'w-36 h-full',
  price:  'flex flex-col text-white',
  percent:  'text-green-400',
}


const Assets = ({ price}) => {
// const randomNumber = () => {
//   let data =[]
//   for(let i=0; i<9; i++) {
//     let randomNum = Math.floor(Math.Random() * 100)
//     data = [...data, randomNum]
//   }
// }


 
  const data = {
    labels: ['.','.','.','.','.','.','.','.','.','.','.'],
    datasets: [
      { fill: false,
        lineTension: 0.01,
        backgroundColor: '#00ff1a',
        borderColor: '#00ff1a',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#00ff1a',
        pointBorderColor: '#00ff1a',
        pointBackgroundColor: '#00ff1a',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#00ff1a',
        pointHoverBorderColor: '#00ff1a',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [40,45,40,50,70,72,50,50,55,70],
        }
    ]
  }

  const options={
    plugins: {
        legend: {
            display: false,
        }
    }
}



  return ( 
    <div className={styles.wrapper}>
       <div className={styles.container}> 
       <div className={styles.name}> COINS </div> 
        </div>

        <div>
        <div className={styles.chart}> 
        <Line data={data} options={options} width={400} height={150} />
        </div>
        </div>

        <div className={styles.price}>
        <div>{price}</div>
        <div className={styles.percent}>
        
        </div>

        </div>
        
    </div>
  )
}

export default Assets