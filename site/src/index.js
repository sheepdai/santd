/**
 * @file 官网入口文件
 * @author wangyongqing <wangyongqing01@baidu.com>
 */

import {Component} from 'san';
import {router} from 'san-router';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

import Content from './containers/Content';
import Header from './containers/Header';
import Navigator from './containers/Navigator';

import {Notification, Col, Row, Affix, Icon} from 'santd';

import routes from './lib/routes';
import './style/index.less';
const defaultPath = '/docs/quickstart';

class Index extends Component {
    // eslint-disable-next-line
    static template = /*html*/ `
        <div class="page-wrapper">
            <doc-header routes="{{routes}}" on-redirect="handleRedirect"/>
            <div class="main-wrapper">
                <s-row>
                    <s-col xs="24" sm="24" md="24" lg="6" xl="5" xxl="4" class="main-menu">
                        <s-affix>
                            <section class="main-menu-inner">
                                <doc-navigator
                                    class="aside-container menu-site"
                                    style="top: {{navigatorFixedTop}}px;"
                                    routes="{{routes}}"
                                    currentPath="{{currentPath}}"
                                    on-redirect="handleRedirect"
                                />
                            </section>
                        </s-affix>
                    </s-col>
                    <s-col xs="24" sm="24" md="24" lg="18" xl="19" xxl="20">
                        <section class="main-container">
                            <doc-content content="{{content}}" />
                        </section>
                        <section class="prev-next-nav">
                            <a class="prev-page" href="#{{leftNav.key}}" s-if="leftNav"><s-icon type="left" /> {{leftNav.text || leftNav.name}}</a>
                            <a class="next-page" href="#{{rightNav.key}}" s-if="rightNav">{{rightNav.text || rightNav.name}} <s-icon type="right" /></a>
                        </section>
                        <footer id="footer">
                            <div class="footer-wrap">
                                <s-row>
                                    <s-col xs="24" sm="24" md="6">
                                        <div class="footer-center">
                                            <h2>相关资源</h2>
                                            <div><a href="https://ant.design/docs/react/introduce-cn" target="_blank">Ant Design</a><span> - </span><span>React</span></div>
                                            <div><a href="https://antdv.com/docs/vue/introduce-cn" target="_blank">Ant Design</a><span> - </span><span>Vue</span></div>
                                            <div><a href="https://github.com/NG-ZORRO/ng-zorro-antd" target="_blank">Ant Design</a><span> - </span><span>Angular</span></div>
                                            <div><a href="https://github.com/websemantics/awesome-ant-design" target="_blank">Awesome Ant Design</a></div>
                                            <div><a href="https://baidu.github.io/san/">San</a></div>
                                        </div>
                                    </s-col>
                                    <s-col xs="24" sm="24" md="6">
                                        <div class="footer-center">
                                            <h2>帮助</h2>
                                            <div><a href="https://github.com/ecomfe/santd" target="_blank">GitHub</a></div>
                                            <div><a href="#/docs/changelog">更新日志</a></div>
                                            <div><a href="https://ecomfe.github.com/santd/issue">报告 Bug</a></div>
                                        </div>
                                    </s-col>
                                    <s-col xs="24" sm="24" md="6">
                                        <div class="footer-center">
                                            <h2><img alt="" class="title-icon" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"><span>更多产品</span></h2>
                                            <div><a href="https://yuque.com/" target="_blank "><i nz-icon="" nztheme="fill" nztype="yuque" style="margin-right: 4px; color: rgb(37, 184, 100);" class="anticon anticon-yuque"><svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" data-icon="yuque" aria-hidden="true"><path d="M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.9-8.1-195-3-195-3s87.4 55.6 52.4 154.7c-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6z"></path></svg></i> 语雀</a><span> - </span><span>知识创作与分享工具</span></div>
                                            <div><a href="https://yunfengdie.com/" target="_blank "><span>云凤蝶</span></a><span> - </span><span>移动建站平台</span></div>
                                            <div><a href="https://antv.alipay.com/" rel="noopener noreferrer" target="_blank">AntV</a><span> - </span><span>数据可视化</span></div>
                                            <div><a href="https://eggjs.org/" rel="noopener noreferrer" target="_blank">Egg</a><span> - </span><span>企业级 Node 开发框架</span></div>
                                            <div><a href="http://xtech.antfin.com/" target="_blank "><span>蚂蚁体验科技</span></a></div>
                                        </div>
                                    </s-col>
                                </s-row>
                            </div>
                        </footer>
                    </s-col>
                </s-row>
            </div>
        </div>
    `;

    static components = {
        'doc-content': Content,
        'doc-header': Header,
        'doc-navigator': Navigator,
        's-col': Col,
        's-row': Row,
        's-affix': Affix,
        's-icon': Icon
    };

    static computed = {
        leftNav() {
            const currentPath = this.data.get('currentPath');
            const flattenRouter = this.data.get('flattenRouter') || [];
            let leftNav;
            flattenRouter.forEach((router, index) => {
                if (router.key === currentPath) {
                    leftNav = flattenRouter[index - 1];
                }
            });

            return leftNav;
        },
        rightNav() {
            const currentPath = this.data.get('currentPath');
            const flattenRouter = this.data.get('flattenRouter') || [];
            let rightNav;
            flattenRouter.forEach((router, index) => {
                if (router.key === currentPath) {
                    rightNav = flattenRouter[index + 1];
                }
            });

            return rightNav;
        }
    }

    initData() {
        return {
            routerMap: {},
            routes
        };
    }

    inited() {
        let routerMap = {};
        let flattenRouter = [];
        const routes = this.data.get('routes');
        routes.forEach(item => {
            routerMap[item.key] = {};
            if (!item.list) {
                flattenRouter.push(item);
            }
            item.leaf && item.leaf.forEach(subItem => {
                routerMap[item.key][subItem.path] = true;
            });
            item.list && item.list.forEach(listItem => {
                listItem.leaf && listItem.leaf.forEach(subItem => {
                    flattenRouter.push(subItem);
                    routerMap[item.key][subItem.path] = true;
                });
            });
        });
        this.data.set('routerMap', routerMap);
        this.data.set('flattenRouter', flattenRouter);
    }

    attached() {
        const that = this;
        // 错误提示
        window.addEventListener('error', this.handleError.bind(this), false);

        // 添加路由
        router.add({
            rule: '/:type/:id',
            handler(e) {
                // console.log(e); // eslint-disable-line
            }
        });

        // 路由监听
        router.listen(e => {
            const query = e.query;
            if (e.path === '/') {
                that.handleRedirect({key: defaultPath});
                that.data.set('currentPath', defaultPath);
            }
            else {
                that.data.set('currentPath', e.path);
                document.getElementById('content').innerHTML = '';
                that.data.set('content', '');
                if (query.type === 'docs') {
                    import(
                        /* webpackChunkName: "docs" */
                        `@docs/${query.id}.md?exportType=html`
                    ).then(({default: html}) => {
                        that.data.set('content', html);
                    }).catch(e => {
                        that.handleError(e);
                    });
                }
                else if (query.type === 'components') {
                    import(
                        /* webpackChunkName: "comp-doc" */
                        `santd/${query.id}/docs/index.js`
                    ).then(({default: Doc}) => {
                        // 得到的是san component 对象
                        let doc = new Doc();
                        doc.attach(document.getElementById('content'));
                    }).catch(e => {
                        that.handleError(e);
                    });
                }
                that.hlCode();
            }
            this.nextTick(() => {
                if (window.document.documentElement.scrollTop > 110) {
                    window.scroll(0, 110);
                }
            });
        });

        router.start();
    }

    // 校验路由规则 /:type/:id
    checkRouter(query) {
        if (!query.type || !query.id) {
            return false;
        }
        const routerMap = this.data.get('routerMap');
        return routerMap[query.type] && routerMap[query.type][query.id];
    }
    hlCode() {
        setTimeout(() => {
            let code = document.getElementsByTagName('code');
            Array.prototype.forEach.call(code, function (item) {
                Prism.highlightElement(item);
            });
        }, 500);
    }
    handleError(err) {
        Notification.error({
            message: err.type || '错误提示',
            description: err.message || '出错了'
        });
    }

    handleRedirect(item) {
        if (item.key) {
            router.locator.redirect(item.key);
        }
    }
}

const app = new Index();
app.attach(document.getElementById('app'));
