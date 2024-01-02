import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageWithSkeleton = ({ src, alt }) => {
  return (
    <SkeletonTheme>
      <Skeleton height={190} width={320} />
      <Skeleton width={140} ></Skeleton>
      <Skeleton width={90} ></Skeleton>
    </SkeletonTheme>
  );
};

export default ImageWithSkeleton;
