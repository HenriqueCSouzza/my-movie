interface CircleMeterProps {
  percentage: number
}

const CircleMeter: React.FC<CircleMeterProps> = ({ percentage }) => {
  function getColor(percentage: number): string {
    if (percentage >= 60) {
      return 'border-green-500'
    } else if (percentage >= 50) {
      return 'border-yellow-500'
    } else {
      return 'border-red-500'
    }
  }

  const color = getColor(percentage)
  return (
    <div
      style={{ padding: '2px' }}
      className={`w-9 h-9  rounded-full bg-black relative flex items-center justify-center `}
    >
      <span
        className={`w-8 h-8 text-white font-bold text-sm  rounded-full border ${color} flex items-center justify-center`}
      >
        <span> {percentage}%</span>
      </span>
    </div>
  )
}

export default CircleMeter
