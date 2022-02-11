import React from 'react';
import {ResponsiveContainer ,LineChart,Line,XAxis ,YAxis ,CartesianGrid, Tooltip, Legend, AreaChart, Area, BarChart, Bar} from 'recharts';



const pdata = [
    {
      name: 'Python',
      student: 13,
      fees: 10
    },
    {
      name: 'Javascript',
      student: 15,
      fees: 12
    },
    {
      name: 'PHP',
      student: 5,
      fees: 10
    },
    {
      name: 'Java',
      student: 10,
      fees: 5
    },
    {
      name: 'C#',
      student: 9,
      fees: 4
    },
    {
      name: 'C++',
      student: 10,
      fees: 8
    },
  ];

const Bargraph = () => {
  return (
      <>
          <h1>Line Graphs</h1>
          <ResponsiveContainer width ="100%" aspect= {3}>
            <LineChart data={pdata} width={500} height={300} margin={{top:5 ,right:800, left:50 , bottom:100}}>
            <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(val) => val+"language"}/>
             <YAxis />  
             <Tooltip contentStyle={{background:'#4c0094'}}/> 
             <Legend />
                <Line type= "monotone" dataKey="student" stroke='red' activeDot={{r:5}}/>
                <Line  type= "monotone" dataKey="fees" stroke='green' activeDot={{r:5}}/>
            </LineChart>
          </ResponsiveContainer>

          <h1 className="chart-heading">Area Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 100,
            left: 800,
            bottom: 15,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#d62250" />
        </AreaChart>
      </ResponsiveContainer>

      <h1 className="chart-heading">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 800,
            left: 50,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip  contentStyle={{background:'#ff9966' , borderRadius:'10px'}}/>
          <Legend />
          <Bar dataKey="student" fill="yellow" />
          <Bar dataKey="fees" fill="blue" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}


export default Bargraph;