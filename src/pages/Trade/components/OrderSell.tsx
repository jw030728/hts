import { useState } from 'react';
import {
  Button,
  Box,
  IconButton,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  InputAdornment,
  OutlinedInput,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

type OrderSellType = {
  index: number;
  value: number;
};

const LabelSytle = {
  display: 'fles',
  alignContent: 'center',
  alignTimes: 'center',
  justifyContent: 'center',
};

const SclaeButtonStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

//매도

const OrderSell = (props: OrderSellType) => {
  const { index, value } = props;
  return (
    <Box hidden={index !== value}>
      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelSytle}>
            <FormLabel>주문구분</FormLabel>
            <IconButton>
              <HelpOutlineOutlinedIcon />
            </IconButton>
          </Grid>

          <Grid item xs={9}>
            <RadioGroup row>
              {/* row 가로로처리 */}
              <FormControlLabel control={<Radio />} label="지정가" value="fixed" />
              <FormControlLabel control={<Radio />} label="시장가" value="market" />
            </RadioGroup>
          </Grid>
        </Grid>
      </FormControl>

      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelSytle}>
            <FormLabel>주문가능</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <Box textAlign="right" padding="20px">
              0주
            </Box>
          </Grid>
        </Grid>
      </FormControl>

      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelSytle}>
            <FormLabel>매도가격</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <FormControl fullWidth>
              <Grid container>
                <Grid item xs={8}>
                  {/* endadornment 입력창 마지막에 넣을거 margin='dense'적당히맞추는거*/}
                  <OutlinedInput type="number" fullWidth margin="dense" endAdornment={<InputAdornment position="end">원</InputAdornment>} />
                </Grid>
                <Grid item xs={4}>
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </FormControl>

      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelSytle}>
            <FormLabel>주문수량</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <OutlinedInput type="number" fullWidth margin="dense" />
          </Grid>
        </Grid>
      </FormControl>

      <FormControl fullWidth>
        <Box paddingTop="10px" paddingBottom="10px">
          <Grid container>
            <Grid item xs={3} style={LabelSytle}></Grid>
            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={12} style={SclaeButtonStyle}>
                  <Button variant="outlined">10%</Button>
                  <Button variant="outlined">25%</Button>
                  <Button variant="outlined">50%</Button>
                  <Button variant="outlined">100%</Button>
                  <Button variant="outlined">직접입력</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </FormControl>

      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelSytle}>
            <FormLabel>주문총액</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <OutlinedInput type="number" fullWidth margin="dense" endAdornment={<InputAdornment position="end">원</InputAdornment>} />
          </Grid>
        </Grid>
      </FormControl>

      <FormControl>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            <Box paddingTop="10px">
              <Button variant="outlined" color="primary" fullWidth>
                매도
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};

export default OrderSell;
