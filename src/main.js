import React from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const util = require('./util.js');
const styles = require('./style.js').styles;

class SummaryGraph extends React.Component{
  render(){
    return(
      <View style={{alignSelf: 'stretch'}}>
        <BarChart
          style={{}}
          data={{
            labels: ["2020/03", "2020/04", "2020/05", "2020/06", "2020/07", "2020/08"],
            datasets: [
              {
                data: [45000,61500,29000,65900,14000,7000]
              }
            ]
          }}
          width={Dimensions.get("window").width - 50}
          yAxisLabel="₩"
          height={250}
          chartConfig={{
            backgroundColor: 'transparent',
            backgroundGradientFrom: '#334455',
            backgroundGradientTo: 'rgba(255, 255, 255, 0)',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          fromZero={true}
          verticalLabelRotation={30}
        />
      </View>
    );
  }
}

export class Summary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      amount: 31292984
    }
  }

  componentDidMount(){
    const _this = this;
    setInterval(function(){
      let nextAmount = _this.state.amount + parseInt(15 * Math.random()) * (Math.random() > 0.5 ? 1 : 2);
      _this.setState({
        amount: nextAmount,
      });
    }, parseInt(400 * Math.random()));
  }
  
  render(){
    let amountStr = util.formatCurrency(this.state.amount);

    return(
      <View style={styles.summaryGraphContainer}>
        <Text style={{fontSize: 15, color: '#999'}}>Transaction Sum</Text>
        <Text style={{}}>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: '#FFF'}}>
            {amountStr}
          </Text>&nbsp;&nbsp;
          <Text style={{fontSize: 12, color: '#999'}}>KRW</Text>
        </Text>
        <SummaryGraph/>
      </View>
    );
  }
}

class TransactionList extends React.Component{
  render(){
    return(
      <View>
        <Text>a</Text>
      </View>
    );
  }
}