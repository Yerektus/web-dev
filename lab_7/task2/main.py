from models import DigitalProduct, PhysicalProduct, build_sample_catalog


def print_catalog() -> None:
    catalog = build_sample_catalog()

    print("LAB 7 - TASK 2: OOP DEMO")
    print("=" * 40)

    for product in catalog:
        print(product)
        print(product.describe())
        print(f"Shipping cost: ${product.get_shipping_cost():.2f}")
        print("-" * 40)

    print("Applying a 10% discount to each product...")
    for product in catalog:
        new_price = product.apply_discount(10)
        print(f"{product.name}: new price is ${new_price:.2f}")

    print("-" * 40)
    print("Child-specific methods:")

    for product in catalog:
        if isinstance(product, PhysicalProduct):
            updated_stock = product.restock(3)
            print(f"{product.name}: stock after restock is {updated_stock}")
        elif isinstance(product, DigitalProduct):
            print(product.download())


if __name__ == "__main__":
    print_catalog()
