import { motion } from 'framer-motion';

interface Props {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label: string;
}

const CircularProgress = ({ value, size = 100, strokeWidth = 8, color = '#8b5cf6', label }: Props) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#2d2d3a"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, delay: 0.5 }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="1.2rem"
          fontWeight="bold"
        >
          {value}%
        </text>
      </svg>
      <span className="mt-2 text-gray-300">{label}</span>
    </div>
  );
};

export default CircularProgress;