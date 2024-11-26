import UserSetting from "../views/User/UserSetting.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import MusicManagement from "../views/Admin/MusicManagement.vue";
import Music from "../views/Music/Music.vue";
import Singer from "../views/Singer/Singer.vue";
import MusicStar from "../views/Music/MusicStar.vue";
import MusicDetail from "../views/Music/MusicDetail.vue";
import SingerDetail from "../views/Singer/SingerDetail.vue";
import HotMusic from "../views/Music/HotMusic.vue";
import UserManagement from "../views/Admin/UserManagement.vue";
import SingerManagement from "../views/Admin/SingerManagement.vue";

const routes = [
    {path: '/',title: '音乐推荐', component: Music, meta: {layout: 'basic'}},
    {path: '/hot/music', title: '热门音乐',component: HotMusic, meta: {layout: 'basic'}},
    {path: '/singer/recommend', title: '歌手推荐',component: Singer, meta: {layout: 'basic'}},
    {path: '/song/star', title: '音乐收藏',component: MusicStar, meta: {layout: 'basic'}},
    {path: '/musicDetail/:id', title: '音乐详情',component: MusicDetail, meta: {layout: 'basic'}},
    {path: '/singerDetail/:id', title: '歌手详情',component: SingerDetail, meta: {layout: 'basic'}},
    {path: '/setting',title: '用户设置', component: UserSetting, meta: {layout: 'basic'}},
    {path: '/user/login', title: '用户登录',component: LoginPage, meta: {layout: 'basic'}},
    {path: '/user/register', title: '用户注册',component: RegisterPage, meta: {layout: 'basic'}},
    {path: '/admin/musicManagement', title: '音乐管理', component: MusicManagement, meta: {layout: 'admin'}},
    {path: '/admin/singerManagement', title: '歌手管理', component: SingerManagement, meta: {layout: 'admin'}},
    {path: '/admin/userManagement', title: '用户管理', component: UserManagement, meta: {layout: 'admin'}},
]

export default routes;