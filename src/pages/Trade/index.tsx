import { Container, Grid } from '@material-ui/core';
import Order from './components/Order';

const Trade = () => {
  return (
    <Container>
      <Grid container style={{ backgroundColor: '#ff5c5c' }}>
        <Grid item xs={12} lg={2}>
          검색
        </Grid>

        <Grid item xs={12} lg={10} style={{ backgroundColor: 'blue' }}>
          <Grid container style={{ backgroundColor: '' }}>
            <Grid item xs={12} style={{ background: '#ff9fff' }}>
              현재가
            </Grid>
            <Grid item xs={12} style={{ backgroundColor: '#022fff' }}>
              차트
            </Grid>
            <Grid item xs={12} lg={6} style={{ backgroundColor: '#ff2fff' }}>
              호가
            </Grid>
            <Grid item xs={12} lg={6} style={{ backgroundColor: '#fffa5c' }}>
              <Order />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Trade;
