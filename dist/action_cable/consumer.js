var Connection,Consumer,Subscriptions;Connection=require("./connection").default,Subscriptions=require("./subscriptions").default;export default Consumer=class{constructor(n,t,e){this.send=this.send.bind(this),this.connect=this.connect.bind(this),this.disconnect=this.disconnect.bind(this),this.ensureActiveConnection=this.ensureActiveConnection.bind(this),this.log=t,this.WebSocket=e,this.url=this.createWebSocketURL(n),this.subscriptions=new Subscriptions(this),this.connection=new Connection(this,this.log,this.WebSocket)}send(n){return this.connection.send(n)}connect(){return this.connection.open()}disconnect(){return this.connection.close({allowReconnect:!1})}ensureActiveConnection(){if(!this.connection.isActive())return this.connection.open()}createWebSocketURL(n){return n&&!/^wss?:/i.test(n)&&(n=n.replace("http","ws")),n}};