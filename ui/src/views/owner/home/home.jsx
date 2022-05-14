import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';

const Home_Owner = () => {
    return (
        <>
        <Header/>
        <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />
        <div className='container'>
        <div className='shopc'>
        <h1>Add Product</h1>
        <p><Link to="/">Home</Link> / <Link to="/homeowner">Add Product</Link></p>
        </div>
            <form>
            <div class="row mb-4">
                <div class="col">
                <div class="form-group">
                    <label style={{fontWeight:'bold',color:'#5D5D5D'}} class="form-label">*Product Name</label>
                    <input type="text" id="" class="form-control" placeholder="Enter Product Name" required />
                </div>
                </div>
                <div class="col">
                <div class="form-outline">
                    <label style={{fontWeight:'bold',color:'#5D5D5D'}} class="form-label">*SKU</label>
                    <input type="text" id="" class="form-control" placeholder="Enter SKU" required />
                </div>
                </div>
            </div>
            
            <div class="form-outline mb-4">
                <label style={{fontWeight:'bold',color:'#5D5D5D'}} class="form-label">*Size</label>
                <input type="text" id="" class="form-control" placeholder="Enter Size" required />
            </div>
            <div class="form-outline mb-4">
                <label style={{fontWeight:'bold',color:'#5D5D5D'}} class="form-label">*Price</label>
                <input type="number" id="" class="form-control" placeholder="Enter Price" required />
            </div>
            <div class="form-outline mb-4">
                <label style={{fontWeight:'bold',color:'#5D5D5D'}} class="form-label">*Stock</label>
                <input type="number" id="" class="form-control" placeholder="Enter Stock Quantity" required />
            </div>
            <div class="form-outline mb-4">
                <label style={{fontWeight:'bold',color:'#5D5D5D'}} class="form-label">*Description</label>
                <textarea class="form-control" id="" rows="5" placeholder="Enter Product Description" required></textarea>
            </div>
            <div class="form-outline mb-4">
                <label style={{fontWeight:'bold',color:'#5D5D5D'}} class="form-label">*Upload Image</label>
                <input type="file" id="" style={{width:'300px'}} class="form-control" required accept=".png" />
            </div>
            <br/>
            <center>
            <button type="submit" class="btn btn-primary">Add Product</button>
            </center>
            </form> 
        </div>
        <Footer/>
        </>
    );
};

export default Home_Owner;