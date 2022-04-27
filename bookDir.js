const fs=require('fs');
const store=require('./books.json');


const bookController=(
    {
        addBook:(req,res)=>{

            store.Books.push(req.body);
            fs.writeFile('books.json',JSON.stringify(store,null,2),(err)=>{
                if(err){
                    res.json(err);
                }else{
                    res.json("data added");
                }
            })
    },


    getAllBooks:(req,res)=>{
        fs.readFile('books.json','utf-8',(err,jsonString)=>{
            if(err){
                res.json(err);
            }else{
                const jsonObj=JSON.parse(jsonString);
                res.json(jsonObj);
            }
        });
            
    },


    getBookId:(req,res)=>{
        const bookId=req.params.id;
        fs.readFile('books.json','utf-8',(err)=>{
            if(err){
                res.json(err);
            }else{
                New=store.Books;
                New.map((i)=>{
                    if(Number(bookId)==Number(i.id)){
                        News=New.filter((item)=>item.id==i.id);
                            res.json(News);
                        }
                    })
                }
            })
            
    },


    editBook:(req,res)=>{
        const Par=req.params.id;
       const Edit=req.body;
       const New=store.Books;
    
       New.map((i)=>{
           if(Number(Par)==Number(i.id)){
               const Index=New.filter((item)=>item.id!==i.id);
               Index.push(Edit);
    
               
                fs.writeFile('books.json',JSON.stringify({"Books":Index},null,2),(err)=>{
                    if(err){
                        res.json(err);
                    }else{
                        res.json("data updated successfully");
                    }
                })
            
               
               
           }
       })
    },

    deleteBook:(req,res)=>{
        const bookId=req.params.id;
        fs.readFile('books.json','utf-8',(err)=>{
            if(err){
                res.json(err);
            }else{
                const New=store.Books;
                New.map((i)=>{
                    if(Number(bookId)==Number(i.id)){
                    News=New.filter((item)=>item.id!==i.id);
    
                    // res.json(News);
                    fs.writeFile('books.json',JSON.stringify({"Books":News},null,2),(err)=>{
                        if(err){
                            res.json(err);
                        }else{
                            res.send("data updated successfully")
                        }
                    })
                    }
                })
                
                    
            }
        });
    }


    
    }
);


module.exports=bookController;