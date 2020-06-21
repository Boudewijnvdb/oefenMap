import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';




const Chart = props => {


    return (

        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={40}
            width={700}
            height={200}
        >

            <VictoryAxis
                label="Opdracht"
                style={{
                    tickLabels: { angle: 90, fontSize: 6 },
                    axisLabel: { padding: 25 }

                }}




            />
            <VictoryAxis
                dependentAxis
                style={{
                    tickLabels: { fontSize: 6 },
                    axisLabel: { padding: 25 }

                }}
                tickFormat={(x) => (`${x / 1}`)}
                label="Score"
            />
            <VictoryGroup offset={3}
                colorScale={"qualitative"}>

                <VictoryBar
                    data={props.Scores}
                    x="opdracht"
                    y="leuk"
                />
                <VictoryBar
                    data={props.Scores}
                    x="opdracht"
                    y="moeilijkheid"
                />

            </VictoryGroup>

        </VictoryChart >
    )

}

export default Chart;