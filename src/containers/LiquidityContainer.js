import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import LiquidityMyLiquidityTable from '../components/liquidity/LiquidityMyLiquidityTable';
import LiquidityPoolsTable from '../components/liquidity/LiquidityPoolsTable';
import LiquidityTokensTable from '../components/liquidity/LiquidityTokensTable';
import CustomButton from '../components/shared/CustomButton';
import { FlexContainer } from '../components/shared/FlexContainer';
import Label from '../components/shared/Label';
import {
  ROUTE_LIQUIDITY_ADD_LIQUIDITY_DOUBLE_SIDED,
  ROUTE_LIQUIDITY_ADD_LIQUIDITY_SINGLE_SIDED,
  ROUTE_LIQUIDITY_MY_LIQUIDITY,
  ROUTE_LIQUIDITY_POOLS,
  ROUTE_LIQUIDITY_TOKENS,
} from '../router/routes';
import theme from '../styles/theme';

const LiquidityContainer = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  return (
    <FlexContainer
      className="column w-100 h-100"
      desktopStyle={{ padding: `50px ${theme.layout.desktopPadding}px` }}
      mobileStyle={{ paddingBottom: 40 }}
    >
      <FlexContainer className="w-100 justify-sb" mobileClassName="column" style={{ marginBottom: 24 }} mobileStyle={{ marginTop: 24 }}>
        <FlexContainer gap={16} mobileClassName="justify-sa" mobileStyle={{ marginBottom: 16 }}>
          <Label
            withShade={pathname !== ROUTE_LIQUIDITY_TOKENS}
            className="pointer"
            fontSize={24}
            fontFamily="syncopate"
            onClick={() => history.push(ROUTE_LIQUIDITY_TOKENS)}
          >
            TOKENS
          </Label>
          <Label
            withShade={pathname !== ROUTE_LIQUIDITY_POOLS}
            className="pointer"
            fontSize={24}
            fontFamily="syncopate"
            onClick={() => history.push(ROUTE_LIQUIDITY_POOLS)}
          >
            POOLS
          </Label>
        </FlexContainer>
        <FlexContainer gap={16} mobileClassName="justify-sa">
          <CustomButton
            type={pathname === ROUTE_LIQUIDITY_MY_LIQUIDITY ? 'secondary' : 'primary'}
            fontFamily="syncopate"
            onClick={() => history.push(ROUTE_LIQUIDITY_MY_LIQUIDITY)}
          >
            MY LIQUIDITY
          </CustomButton>
          <CustomButton
            type="secondary"
            fontFamily="syncopate"
            onClick={() =>
              history.push(
                pathname === ROUTE_LIQUIDITY_TOKENS ? ROUTE_LIQUIDITY_ADD_LIQUIDITY_SINGLE_SIDED : ROUTE_LIQUIDITY_ADD_LIQUIDITY_DOUBLE_SIDED,
                { from: pathname }
              )
            }
          >
            ADD LIQUIDITY
          </CustomButton>
        </FlexContainer>
      </FlexContainer>
      {pathname === ROUTE_LIQUIDITY_TOKENS && <LiquidityTokensTable />}
      {pathname === ROUTE_LIQUIDITY_POOLS && <LiquidityPoolsTable />}
      {pathname === ROUTE_LIQUIDITY_MY_LIQUIDITY && <LiquidityMyLiquidityTable />}
    </FlexContainer>
  );
};

export default LiquidityContainer;