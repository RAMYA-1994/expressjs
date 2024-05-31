// const express=require('express');
import express from 'express'
import AppRouter from'./routes/index.js'
const app=express()
const PORT=8000
app.use(AppRouter)

app.listen(PORT,()=>console.log(`App is running ${PORT}`))