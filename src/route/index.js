import UserSetting from "../views/User/UserSetting.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import PetManagement from "../views/Admin/PetManagement.vue";
import Music from "../views/Music/Music.vue";
import Singer from "../views/Singer/Singer.vue";
import MusicStar from "../views/Music/MusicStar.vue";
import MusicDetail from "../views/Music/MusicDetail.vue";
import SingerDetail from "../views/Singer/SingerDetail.vue";
import HotMusic from "../views/Music/HotMusic.vue";
import UserManagement from "../views/Admin/UserManagement.vue";

const routes = [
    {path: '/', component: Music, meta: {layout: 'basic'}},
    {path: '/hot/music', component: HotMusic, meta: {layout: 'basic'}},
    {path: '/singer/recommend', component: Singer, meta: {layout: 'basic'}},
    {path: '/song/star', component: MusicStar, meta: {layout: 'basic'}},
    {path: '/musicDetail/:id', component: MusicDetail, meta: {layout: 'basic'}},
    {path: '/singerDetail/:id', component: SingerDetail, meta: {layout: 'basic'}},
    {path: '/setting', component: UserSetting, meta: {layout: 'basic'}},
    {path: '/user/login', component: LoginPage, meta: {layout: 'basic'}},
    {path: '/user/register', component: RegisterPage, meta: {layout: 'basic'}},
    {path: '/admin/petManagement', title: '宠物管理', component: PetManagement, meta: {layout: 'admin'}},
    {path: '/admin/userManagement', title: '用户管理', component: UserManagement, meta: {layout: 'admin'}},
]

export default routes;