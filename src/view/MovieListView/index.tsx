import Container from "./components/Container";
import TrendingButton from "./components/TrendingButton";
export default function MovieListView() {
  return (
    <Container>
      <div className="flex flex-row">
        <h3 className="font-semibold" style={{ fontSize: "24px" }}>
          Tendências
        </h3>
        <TrendingButton />
      </div>
      <div></div>
    </Container>
  );
}
