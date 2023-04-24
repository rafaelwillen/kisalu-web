import DesktopPagination from "./Desktop";
import MobilePagination from "./Mobile";

export default function Pagination() {
  return (
    <>
      <MobilePagination />
      <DesktopPagination />
    </>
  );
}
