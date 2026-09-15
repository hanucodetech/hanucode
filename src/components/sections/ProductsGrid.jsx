import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import ProductCard from '@/components/cards/ProductCard';
import Button from '@/components/common/Button';
import { products } from '@/data/products';

export default function ProductsGrid({ title, description, badge, limit, showCta = true }) {
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className="section-padding bg-surface">
      <Container>
        <SectionHeading badge={badge} title={title} description={description} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        {showCta && (
          <div className="mt-12 text-center">
            <Button href="/products" variant="outline" size="lg" showArrow className="group">
              View All Products
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
