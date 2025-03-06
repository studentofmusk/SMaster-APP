import React from "react";
import { View, Text } from "react-native";
import { Svg, Circle } from "react-native-svg";

interface CircularProgressProps {
  progress: number; // Percentage (0-100)
  size?: number;
  strokeWidth?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 100,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress / 100);

  return (
    <View className="items-center justify-center">
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="gray"
          strokeWidth={strokeWidth}
          fill="none"
          opacity={0.2}
        />
        {/* Progress Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#5C469C"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      {/* Percentage Text */}
      <Text  className="absolute  font-bold text-primary">
        {progress}%
      </Text>
    </View>
  );
};

export default CircularProgress;
