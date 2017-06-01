<template>
    <div id="login_body">
        <div id="login_input" ref="from_c">
            <span>用户名</span>
            <input @blur="user_judge" v-model="from.user" type="text" class="login_text" ref="inputuser" />
            <br/>
            <span id="pass">密 码</span>
            <input @blur="pass_judge" v-model="from.pass" type="password" class="login_pas" ref="inputpass" />
            <div class="login_s">
                <el-button type="info" @click="from_sub">登录</el-button>
                <router-link to="Register"><el-button type="info">注册</el-button></router-link>
            </div>
            <router-view></router-view>
            <el-button v-show="false" :plain="true" @click="open3">警告</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            from: {
                user: null,
                pass: null
            },
            vilidate: {
                isuser: '',
                ispass: '',
            }
        }
    },
    methods: {
        user_judge() {
            if (this.from.user) {
                if (this.from.user.length > 6) {
                    this.vilidate.isuser = 1;
                } else {
                    this.open3('用户名必须为6位以上');
                }
            } else {
                this.open3('用户名不能为空');
            }
        },
        pass_judge() {
            if (this.from.pass) {
                if (this.from.pass.length > 6) {
                    this.vilidate.ispass = 1;
                } else {
                    this.open3('密码必须为6位以上');
                }
            } else {
                this.open3('密码不能为空');
            }
        },
        open3(mag) {
            this.$message({
                message: mag,
                type: 'warning'
            });
        },
        from_sub() {
            if (this.vilidate.ispass && this.vilidate.isuser) {
                var _this = this;
                this.$http.get('/src/pages/login/dataa.json').then(function (response) {
                    for (var i = 0; i < response.data.data.length; i++) {
                        if (response.data.data[i].user == _this.from.user) {
                            if (response.data.data[i].pass == _this.from.pass) {
                                setTimeout(_this.$router.push({ path: '/Home/conten1' }), 500)
                                return false;
                            } else {
                                _this.open3('账号或者密码错误');
                            }
                        } else {
                            _this.open3('账号或者密码错误');
                        }
                    }
                }).catch(e => {
                    console.log(e);
                })
            }
        }
    },
    mounted: function () {
        var getUserV = this.$refs.inputuser.value;
        var getPassV = this.$refs.inputpass.value;
        if (getUserV.length > 6 && getPassV.length > 6 ){
            this.vilidate.isuser = 1;
            this.vilidate.ispass = 1;
        }
    }
}

</script>
<style scoped>
#login_body {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(./login_bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

#login_input {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -150px;
    width: 350px;
    height: 300px;
}

.login_text,
.login_pas {
    margin-top: 20px;
    width: 70%;
    height: 30px;
    border-radius: 10px;
    border: none;
    outline: none;
}

.login_pas {
    margin-left: 10px;
}

.login_s {
    margin-top: 20px;
    width: 100%;
}
</style>