import Image from 'next/image'
import LoginPage from './login/page'
import PaymentVerification from './adminpage/component/payment'
import UserVerification from './adminpage/component/user'
import AdnminPage from './adminpage/page'
import NavUser from './dashboarduser/component/nav'
import ProfilUser from './dashboarduser/profile/page'
import OverviewUser from './dashboarduser/overview'


export default function Home() {
  return (
    <ProfilUser/>
  )
}
