import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          labels:[],
          datasets: [
            {
              label: 'Covid-19 in USA',
               data:[],
              borderWidth:0.5,
              borderColor:"magenta",
              backgroundColor:'orange',
              fill:false
            }
          ]
          
        },
        options: {
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
          
        }
      }),
    methods:{
        fetchData : function(){
            axios.get('http://covid19.soficoop.com/country/us').then(response=>{
                this.results=response.data.snapshots
                
                for(let day in this.results){
                    // console.log(day)
                    this.chartdata.datasets[0].data.push(this.results[day]['todayCases'])
                    this.chartdata.labels.push(this.results[day]['timestamp'].substring(11,18)+"")   
                }
                // console.log(this.chartdata)
                this.renderChart(this.chartdata,this.options)      
        })
        }
    },
     mounted(){
        this.fetchData();        
    }
}