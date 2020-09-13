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
      <View style={{backgroundColor: 'red', alignSelf: 'stretch'}}>
        <BarChart
          style={{}}
          data={{
            labels: ["a", "b", "c", "d", "e", "f", "g"],
            datasets: [
              {
                data: [4,6,2,6,1,7,2]
              }
            ]
          }}
          width={Dimensions.get("window").width}
          yAxisLabel="$"
          height={220}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
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
      _this.setState({
        amount: _this.state.amount + parseInt(15 * Math.random()) * (Math.random() > 0.5 ? 1 : -1)
      });
    }, parseInt(400 * Math.random()));
  }
  
  render(){
    return(
      <View style={styles.summaryGraphContainer}>
        <Text style={{fontSize: 15, color: '#999'}}>Transaction Sum</Text>
        <Text style={{}}>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: '#FFF'}}>
            {util.formatCurrency(this.state.amount)}
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