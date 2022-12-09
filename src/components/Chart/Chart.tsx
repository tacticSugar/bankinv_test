import ChartBar from './ChartBar'
import './Chart.scss'
import { DataPoint } from '../Expenses/ExpensesChart'

type ChartProps = {
  dataPoints: DataPoint[]
}

const Chart = (props: ChartProps) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
