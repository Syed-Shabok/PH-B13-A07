import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContextProvider";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const FriendsGraph = () => {
  const { interactions } = useContext(FriendContext);

  const data = [
    {
      name: "Call",
      value: interactions.filter((interaction) => interaction.type === "Call")
        .length,
      fill: "#254D3E",
    },
    {
      name: "Text",
      value: interactions.filter((interaction) => interaction.type === "Text")
        .length,
      fill: "#7E37F4",
    },
    {
      name: "Video",
      value: interactions.filter((interaction) => interaction.type === "Video")
        .length,
      fill: "#37A062",
    },
  ];

  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "450px",
        maxHeight: "60vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />

      <Legend
        iconType="circle"
        wrapperStyle={{
          paddingTop: "45px",
        }}
      />
      <Tooltip />
    </PieChart>
  );
};

export default FriendsGraph;
