import Skeleton from '@mui/material/Skeleton';
import styled from "styled-components";


const SkeletonWrapper = styled.div`
  height: 264px;
  width: 264px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Skeletons(){

return( 
  <SkeletonWrapper>
<Skeleton variant="rounded" width="264px"  height="210px" />
<Skeleton variant="text" sx={{ fontSize: "16px" }} />
<Skeleton variant="text" sx={{ fontSize: '16px' }} />
</SkeletonWrapper>
)
}