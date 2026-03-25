import { products } from '../../data/content';
import SectionHeading from '../common/SectionHeading';
import ProductCard from '../common/ProductCard';

function ProductShowcaseSection() {
  return (
    <section id="marketplace" className="section products">
      <div className="container">
        <SectionHeading title="Sản phẩm chủ lực" subtitle="Nguồn hàng chất lượng – giá trực tiếp từ nhà máy Ai Cập" />
        <div className="products__grid">
          {products.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </div>

        <div className="products__cta">
          <div>
            <h4>Nhận catalogue & báo giá chi tiết ngay hôm nay</h4>
            <p>Danh mục linh hoạt cho nhập khẩu, phân phối và OEM theo yêu cầu.</p>
          </div>
          <button className="btn-primary">Yêu cầu báo giá sản phẩm</button>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcaseSection;
