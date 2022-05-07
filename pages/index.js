//components
import Header from '../components/Header'
import BuyTokens from '../components/BuyTokens'
import Notice from '../components/Notice'
import Assets from '../components/Assets'
import PortfolioChart from '../components/PortfolioChart'

//icons
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'


const styles = {
  wrapper : 'w-screen h-screen flex flex-col',
  maincontainer: 'w-2/3 h-full m-auto flex mt-16',
  leftMain:'flex flex-col w-3/4h-full p-6 overflow-y-scroll',
  portfolioAmountContainer:'flex flex-col',
  portfolioAmount:'text-white text-4xl',
  portfolioPercent:'text-white font-bold text-sm',
  pastHour:'text-red-400',
  chartContainer:'text-5x1 flex justify-center w-full h-1/3 text-white mt-11 mb-11',
  buyingPowerContainer:'w-full border-t mb-24 border-b h-16 border-[blue] flex justify-between item',
  buyingPowerTitle:'text-white font-bolder text-lg',
  buyingPowerAmount:'title-white font-bolder text-xl',
 
  rightMain:'flex flex-col flex-1 h-4/5 bg-[#231F20] mt-6 rounded-lg overflow-y-scroll noScroll',
  rightMainItem:'flex items-center text-white p-6 border-b border-[white]',
  itemTitle:'flex-1 font-bold mr-6',
  moreOptions:'cursor-pointer text-xl',
}


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.maincontainer}>
        <div className={styles.leftMain}>
          <div className={styles.portfolioAmountContainer}>
          <div className={styles.portfolioAmount}> 23 ETH </div>
          <div className={styles.portfolioPercent}>
          +0.0008(+0.57%)
          <span className={styles.pastHour}>Past Hour</span>
          </div>
          </div>
          <div> Available 

            <div className={styles.chartContainer}>
              <PortfolioChart />
            </div>
          </div>
          <div className={styles.buyingPowerContainer}>
            <div className={styles.buyingPowerTitle}> Buying Power </div>
            <div className={styles.buyingPowerAmount}> 12 ETH </div>
            </div>
            <div className={styles.notice}>
            <div className={styles.noticeContainer}> 
            <div className={styles.noticeTitle}>Send Funds</div> 
            <div className={styles.noticeMessage}>
              Transfer your funds here.
            </div>
            <BuyTokens />
            </div>
          </div>
          <Notice />
    </div>
    <div className={styles.rightMain}>
      <div className={styles.rightMainItem}>
      <div className={styles.itemTitle}> Crypto Currencies </div>

      <BiDotsHorizontalRounded className={styles.moreOptions} />
      </div>
      {/* <Map through couns and for every coins make an Asset component/> */}
     <Assets coin={"BTC"} price = {0.8}/>
     <Assets coin={"SOL"} price = {-1}/>
     <Assets coin={"ETH"} price = {1.2}/>
     <Assets coin={"USDC"} price = {5.3}/>
      <div className={styles.rightMainItem}>
        <div className={styles.itemTitle}>Lists</div>
        <AiOutlinePlus className={styles.moreOptions} />
      </div>
      </div>
    </div>
    
    </div>
  )
}
