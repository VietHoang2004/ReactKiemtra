import React, { useState } from 'react';
import './style.css';
import img from './logo.jpg'
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    id:'',
    hoten: '',
    gioitinh: '',
    ngaysinh: '',
    noisinh: '',
    dantoc: '',
    tongiao: '',
    hoKhau: '',
    totnghiep: '',
    namtotnghiep: '',
    cmnd: '',
    ngaycap: '',
    noicap: '',
    diachinhanh: '',
    sdt: '',
    sdtph: '',
    nganhhoc: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const { namejob, checked } = e.target;
    const newNganhDangKy = [...formData.nganhhoc];

    if (checked) {
      newNganhDangKy.push(namejob);
    } else {
      const index = newNganhDangKy.indexOf(namejob);
      newNganhDangKy.splice(index, 1);
    }
    setFormData({
      ...formData,
      [name]: value,
      nganhhoc: newNganhDangKy 
    });


    
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/AddInfo', formData);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
    console.log(formData);
    
  };

  return (
    <div className="App">
      <header>
      <table>
        <tr>
          <h2 style={{color:"red",textAlign:"center"}}>Chọn khác biệt chọn thành công</h2>  
        </tr>
        </table>
        <table>
    <tr>
      <th><img src={img} alt="logo" /></th>
      <th style={{color:"red"}}>Thành viên của tổ chức giáo dục EQuest</th>
    </tr>
    </table>
    <table>
    <tr>
      <td>
        <h1 style={{color:"red",textAlign:"left" }}>HỒ SƠ XÉT TUYỂN CAO ĐẲNG TRỰC TUYẾN</h1>
        <hr></hr>
       <h3 style={{color:"red",textAlign:"left",fontSize:"12px"}}> <div className='square'/>Các hạng mục hồ sơ bên dưới vui lòng điền đầy đủ thông tin</h3>
      </td>
    </tr>
  </table>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <section className="thong-tin-ca-nhan">
            <h2>THÔNG TIN CÁ NHÂN</h2>
            <div className="form-group-left">
            <label className="red-text" htmlFor="hoTen">Số:</label>
              <input
                type="text"
                name="id"
                id="id"
                value={formData.id}
                onChange={handleChange}
                required
              />
              <label className="red-text" htmlFor="hoTen">Họ và tên:</label>
              <input
                type="text"
                name="hoten"
                id="hoten"
                value={formData.hoten}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="gioiTinh">Giới tính:</label>
              <select
                name="gioitinh"
                id="gioitinh"
                value={formData.gioitinh}
                onChange={handleChange}
                required
              >
                <option value="">Chọn giới tính</option>
                <option value="Nữ">Nữ</option>
                <option value="Nam">Nam</option>
              </select>
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="ngaySinh">Ngày sinh:</label>
<input
                type="date"
                name="ngaysinh"
                id="ngaysinh"
                value={formData.ngaysinh}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="noiSinh">Nơi sinh:</label>
              <input
                type="text"
                name="noisinh"
                id="noisinh"
                value={formData.noisinh}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="danToc">Dân tộc:</label>
              <input
                type="text"
                name="dantoc"
                id="dantoc"
                value={formData.dantoc}
                onChange={handleChange}
                required
/>
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="tonGiao">Tôn giáo:</label>
              <input
                type="text"
                name="tongiao"
                id="tongiao"
                value={formData.tongiao}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="hoKhau">Hộ khẩu thường trú:</label>
              <input
                type="text"
                name="hokhau"
                id="hokhau"
                value={formData.hokhau}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="noiTotNghiep">Nơi tốt nghiệp THCS hoặc THPT hoặc tương đương:</label>
              <input
                type="text"
                name="totnghiep"
                id="totnghiep"
                value={formData.totnghiep}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="namTotNghiep">Năm tốt nghiệp:</label>
              <input
                type="number"
                name="namtotnghiep"
                id="namtotnghiep"
                value={formData.namtotnghiep}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="cmnd">Số chứng minh nhân dân:</label>
              <input
                type="text"
                name="cmnd"
                id="cmnd"
                value={formData.cmnd}
                onChange={handleChange}
                required
/>
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="ngayCap">Ngày cấp:</label>
              <input
                type="date"
                name="ngaycap"
                id="ngaycap"
                value={formData.ngaycap}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="noiCap">Nơi cấp:</label>
              <input
                type="text"
                name="noicap"
                id="noicap"
                value={formData.noicap}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="diaChiNhanh">Địa chỉ liên lạc (nếu khác hộ khẩu):</label>
              <input
                type="text"
                name="diachinhanh"
                id="diachinhanh"
                value={formData.diachinhanh}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="dienThoai">Điện thoại liên lạc:</label>
              <input
                type="tel"
                name="sdt"
                id="sdt"
                value={formData.sdt}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="dienThoaiPhuHuynh">Điện thoại phụ huynh (nếu có):</label>
              <input
                type="tel"
                name="sdtph"
                id="sdtph"
                value={formData.sdtph}
                onChange={handleChange}
              />
            </div>
          </section>
          <section>
          <div className="form-dang-ky">
              <h1 style={{color:"red"}} >NGÀNH ĐĂNG KÝ XÉT TUYỂN</h1>
              <ul className='red-text'>
            <li>
              <input type="checkbox" name="nganhhoc" value="Digital Marketing" onChange={handleChange} />
              Digital Marketing
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Quản trị khách sạn" onChange={handleChange} />
              Quản trị khách sạn
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Phiên dịch tiếng Anh thương mại" onChange={handleChange} />
              Phiên dịch tiếng Anh thương mại
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="CNTT-Ứng dụng phần mềm" onChange={handleChange} />
              CNTT-Ứng dụng phần mềm
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Tiếng Hàn" onChange={handleChange} />
              Tiếng Hàn
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Chăm sóc sắc đẹp" onChange={handleChange} />
              Chăm sóc sắc đẹp
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Tài chính đầu tư" onChange={handleChange} />
              Tài chính đầu tư
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Công nghệ ô tô" onChange={handleChange} />
              Công nghệ ô tô
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Thiết kế đồ họa" onChange={handleChange} />
              Thiết kế đồ họa
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Quản trị bán hàng" onChange={handleChange} />
              Quản trị bán hàng
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Quản trị doanh nghiệp" onChange={handleChange} />
              Quản trị doanh nghiệp
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Quản lý công nghiệp" onChange={handleChange} />
              Quản lý công nghiệp
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Tiếng Nhật" onChange={handleChange} />
              Tiếng Nhật
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="logistics" onChange={handleChange} />
              logistics
            </li>
            <li>
              <input type="checkbox" name="nganhhoc" value="Tiếng Trung" onChange={handleChange} />
              Tiếng Trung
            </li>
            </ul>
    </div>
    <p style={{color:'red',textAlign:'center',fontWeight:'inherit'}}><i>Tôi cam đoan những lời khai trong phiếu DKXT này là đúng sự thật, nếu sai tôi chấp nhận chịu xử lý theo Quy chế tuyển sinh</i></p>
          </section>
          <button type="submit" style={{textAlign:'center'}}>Đăng ký </button>
        </form>
      </main>
    </div>
  );
}

export default Form;

const nganhHocList = [
  {
maNganh: "digital-marketing",
    tenNganh: "Digital Marketing",
  },
  {
    maNganh: "thiet-ke-do-hoa",
    tenNganh: "Thiết kế đồ họa",
  },
  {
    maNganh: "quan-tri-khach-san",
  tenNganh: "Quản trị khách sạn",
},
{
  maNganh: "quan-tri-ban-hang",
tenNganh: "Quản trị bán hàng",
},
{
  maNganh: "phien-dich",
tenNganh: "Phiên dịch Tiếng Anh thương mại",
},
{
  maNganh: "quan-tri-doanh-nghiep",
  tenNganh: "Quản trị doanh nghiệp",
},
{
  maNganh: "UDPM",
tenNganh: "CNTT - Ứng dụng phần mềm ",
},
{
  maNganh: "quan-ly-cong-nghiep",
tenNganh: "Quản lý công nghiệp",
},
{
  maNganh: "Han",
tenNganh: "Tiếng Hàn",
},
{
  maNganh: "Nhat",
tenNganh: "Tiếng Nhật",
},
{
  maNganh: "CSSD",
tenNganh: "Chăm sóc sắc đẹp",
},
{
  maNganh: "Logistics",
tenNganh: "Logistics",
},
{
  maNganh: "tai-chinh",
tenNganh: "Tài chính đầu tư",
},
{
  maNganh: "Trung",
tenNganh: "Tiếng Trung",
},
{
  maNganh: "CNOT",
tenNganh: "Công nghệ ô tô",
},
];