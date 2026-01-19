import { Line } from "@ant-design/charts";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChartData } from "../../store/slice/chartSlice";

const AssetHistoryChart = ({ slug }) => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.chart);

  useEffect(() => {
    if (slug) {
      dispatch(fetchChartData(slug));
    }
  }, [slug, dispatch]);

  const config = useMemo(
    () => ({
      data,
      xField: "date",
      yField: "value",
      smooth: true,
      slider: true,
      point: { size: 3 },
      xAxis: { type: "time" },
      yAxis: {
        label: {
          formatter: (v) => Number(v),
        },
      },
    }),
    [data]
  );

  return (
    <div>
      {status === "loading" && <p>Загрузка...</p>}
      {status === "failed" && <p>Ошибка загрузки данных</p>}
      {status === "succeeded" && <Line {...config} />}
    </div>
  );
};

export default AssetHistoryChart;
