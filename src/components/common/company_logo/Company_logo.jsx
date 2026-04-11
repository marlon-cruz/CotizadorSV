import '../company_logo/Company_logo.css'

function Company_logo({img, company_name}){
    return(
        <>
        <div className='contentCompanyLogo'>
        <img className='image_company' src= {img} alt="Company name"/>
        <h2 className='Company_name'>{company_name}</h2>
        </div>
        </>
    )
}

export default Company_logo