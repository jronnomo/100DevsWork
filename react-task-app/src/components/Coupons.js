import Coupon from "./Coupon"

const Coupons = ({coupons, onDelete, onToggle}) => {

    return (
        <>
            {coupons.map(coupon => (<Coupon key={coupon.id} coupon={coupon} onToggle={onToggle} onDelete={onDelete}/>))}
        </>
    )
    }

export default Coupons