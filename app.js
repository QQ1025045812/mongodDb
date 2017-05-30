var express=require('express');
var app=express();
var swig=require('swig')
app.use('/public',express.static(__dirname+'/public'));
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
swig.setDefaults({cache:false})
app.use('/admin',require('./routes/admin'))
app.use('/api',require('./routes/api'))
app.use('/',require('./routes/main'))
app.listen(8081);

app.get('/',function(req,res,next){
    res.render('index.html')
})