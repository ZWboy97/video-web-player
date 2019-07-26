
import React, { Component } from 'react';
import Reflv from './Reflv';
import { connectAlita } from 'redux-alita';
import { VCloudAPI } from 'axios';
import Barrage from './barrage';
import initialSize from './flexiable';
import {
  Form, Layout, Input, message, Modal, Button,
  Icon, Row, Col, Comment, Avatar, Switch,
  Tooltip, List, Menu, Spin, Carousel
} from 'antd';
//滚动窗口
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
//时间
import moment from 'moment';

const { TextArea } = Input;
initialSize(window, window['lib'] || (window['lib'] = {}));

//测试的数据
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

const data = [
  {
    actions: [<span>Reply to</span>],
    author: 'PP',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',//一个头像的图片没有什么意义
    content: (
      <p>
        自闭树上你和我
          </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },

]
const barrList = ['嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎', '嘎嘎嘎嘎嘎'];
const FormItem = Form.Item;
const { Header, Footer, Sider, Content } = Layout;
const onChange = e => {
  console.log(e);
};
function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}
function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

class videoPlayer extends Component {

  state = { logining: false };
  state = { visible: false };
  state = {
    data: [],
    loading: false,
    hasMore: true,
    comments: [],
    submitting: false,
    value: '',
    barrList: [],
    onBarrage:true,
  }

  componentDidMount() {
    const { setAlitaState } = this.props;
    //进入登录界面后，初始化auth为null
    setAlitaState({ stateName: 'auth', data: null });
    this.fetchData(res => {
      this.setState(
        {
          data: res.results,
          barrList: res.results.email,
        }
      )
    })
  }

  fetchData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

  componentDidUpdate(prevProps) {
    const { auth: nextAuth = {}, history } = this.props;
    if (nextAuth.data && nextAuth.data.uid) { // 判断是否登陆成功
      //登录成功，则直接条状
      localStorage.setItem('user', JSON.stringify(nextAuth.data));
      history.push('/');
    }
  }

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);

      this.setState({
        data,
        loading: false,
      });
    });

  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [//头像信息
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    console.log('change')
    this.setState({
      value: e.target.value,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { setAlitaState } = this.props;
        console.log('userName:', values.userName)
        VCloudAPI.post('user/login_by_name/ljc', {
          user_name: values.userName,
          passWord: values.password
        })
          .then(response => {
            console.log(response);
            console.log(response.data);
            console.log('http-status,', response.status)
            if (response.status == 201) {
              message.success('登录成功！')
              setAlitaState({ funcName: 'admin', stateName: 'auth' });
            } else if (response.status == 404) {
              message.error('用户名不存在!');
            } else if (response.status == 401) {
              message.error('用户名或密码错误，请重新输入!')
              this.props.form.resetFields()
            } else {
              message.error('登录失败！')
              setAlitaState({ funcName: 'admin', stateName: 'auth' });
            }
          }).catch(r => {
            message.error('登录失败，请稍后重试！')
            // TODO，hard code. 
            setAlitaState({ funcName: 'guest', stateName: 'auth' });
          }).finally(() => {
            this.setState({ logining: false })
          });

      }
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  onBarrage = (unCheckedChildren) => {
    this.setState({
      onBarrage:false
    })
  }

  render() {

    const colorConfig = {
      random: false,
      colorList: ['white']
    }
    const bgGround = {
      backgroundColor: 'rgba(240,248,255,0.8)'
    };
    const demo_infinite_container = {
      border: "2px solid #e8e8e8",
      border_radius: "4px",
      overflow: "auto",
      padding: "8px 5px",
      height: "300px",
    };
    const demo_loading_container = {
      position: "absolute",
      bottom: "40px",
      width: "100%",
      textAlign: "center",
    }
    const Editor = ({ onChange, onSubmit, submitting, value }) => (
      <div>
        
          <TextArea rows={4} onChange={onChange} value={value} />
          <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
            添加弹幕
              </Button>
      </div>
    );
    const CommentList = ({ comments }) => (
      <List
        dataSource={comments}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
      />
    );
    const { getFieldDecorator } = this.props.form;
    const { comments, submitting, value } = this.state;

    return (

      <div style={bgGround} >
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

            <Row>
              <Col span={23}>
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>

                </Menu>
              </Col>

              <Col span={1}>
                <div style={{ marginRight: "10px" }}>
                  <Button type="primary" onClick={this.showModal}>登陆</Button>
                </div>
              </Col>

            </Row>
          </Header>


          <Content style={{ padding: '0 20px', marginTop: 64 }}>

            <div style={{ margin: "20px" }}>
              <Carousel autoplay >
                <div>
                  <h3>广告位1</h3>
                </div>
                <div>
                  <h3>广告位2</h3>
                </div>
                <div>
                  <h3>广告位3</h3>
                </div>
                <div>
                  <h3>广告位4</h3>
                </div>
              </Carousel>
            </div>

            <div style={{ margin: "40px" }} >

              <Row type="flex" justify="center" align="top">

                <Col span={18}>
                  <div >
                    <Barrage barrageList={barrList} color={colorConfig} visible={this.state.onBarrage}/>
                    <Reflv
                      url={'http://39.106.194.43:8090/live360/1458248448.flv'}
                      type="flv">
                    </Reflv>
                  </div>
                  <div>
                    <Row type="flex" align="center" style={{backgroundColor:"#FCFCFC"}}>
                      <Col span={21}>
                        <div style={{margin:"10px"}}>
                        弹幕<Switch size="small" checkedChildren="开" unCheckedChildren="关" defaultChecked onChange={this.onBarrage}/>
                        </div>
                      </Col>
                      <Col span={1}>
                      <Icon type="wechat" style={{ fontSize: '30px',marginRight:"0px"}} />
                      </Col>
                      <Col span={1}>
                      <Icon type="weibo" style={{ fontSize: '30px',marginRight:"0px"}} />
                      </Col>
                      <Col span={1}>
                      <Icon type="qq" style={{ fontSize: '30px',marginRight:"0px"}} />
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col span={6}  >
                  <div style={{ marginLeft: "20px" }}>
                    <div style={demo_infinite_container}>
                      <InfiniteScroll
                        initialLoad={false}
                        pageStart={0}
                        loadMore={this.handleInfiniteOnLoad}
                        hasMore={!this.state.loading && this.state.hasMore}
                        useWindow={false}
                      >
                        <List
                          dataSource={this.state.data}
                          renderItem={item => (
                            <List.Item key={item.id}>
                              <List.Item.Meta
                                avatar={
                                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description={item.email}
                              />
                              <div>Content</div>
                            </List.Item>
                          )}
                        >
                          {this.state.loading && this.state.hasMore && (
                            <div style={demo_loading_container}>
                              <Spin />
                            </div>
                          )}
                        </List>
                      </InfiniteScroll>
                    </div>

                    <div>
                      {comments.length > 0 && <CommentList comments={comments} />}

                      <div>
        
        <TextArea rows={4} onChange={this.handleChange} value={this.state.value} />
        <Button htmlType="submit" loading={this.submitting} onClick={this.handleSubmit} type="primary">
          添加弹幕
            </Button>
    </div>

                   
                    </div>

                    <div >
                      <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                      >
                        <Form>
                          <FormItem>
                            {getFieldDecorator('userName', {
                              rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                            )}
                          </FormItem>
                          <FormItem>
                            {getFieldDecorator('password', {
                              rules: [{ required: true, message: '请输入密码!' }],
                            })(
                              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                            )}
                          </FormItem>
                        </Form>
                      </Modal>
                    </div>

                  </div>
                </Col>
              </Row>

            </div>

          </Content>

          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>

    );

  }


}

export default connectAlita()(Form.create()(videoPlayer));
