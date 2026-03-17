from typing import List


class Product:
    def __init__(self, name: str, price: float, category: str) -> None:
        self.name = name
        self.price = price
        self.category = category

    def apply_discount(self, percent: float) -> float:
        if not 0 <= percent <= 100:
            raise ValueError("Discount percent must be between 0 and 100.")

        self.price -= self.price * (percent / 100)
        return round(self.price, 2)

    def get_shipping_cost(self) -> float:
        return 5.0

    def describe(self) -> str:
        return (
            f"{self.name} belongs to the '{self.category}' category and costs "
            f"${self.price:.2f}."
        )

    def __str__(self) -> str:
        return (
            f"Product(name='{self.name}', price=${self.price:.2f}, "
            f"category='{self.category}')"
        )


class PhysicalProduct(Product):
    def __init__(
        self,
        name: str,
        price: float,
        category: str,
        weight_kg: float,
        stock: int,
    ) -> None:
        super().__init__(name, price, category)
        self.weight_kg = weight_kg
        self.stock = stock

    def restock(self, amount: int) -> int:
        if amount < 0:
            raise ValueError("Restock amount cannot be negative.")

        self.stock += amount
        return self.stock

    def get_shipping_cost(self) -> float:
        return round(4.0 + self.weight_kg * 1.8, 2)

    def describe(self) -> str:
        return (
            f"{self.name} is a physical product with {self.stock} item(s) in "
            f"stock and shipping cost ${self.get_shipping_cost():.2f}."
        )

    def __str__(self) -> str:
        return (
            f"PhysicalProduct(name='{self.name}', price=${self.price:.2f}, "
            f"category='{self.category}', weight_kg={self.weight_kg}, "
            f"stock={self.stock})"
        )


class DigitalProduct(Product):
    def __init__(
        self,
        name: str,
        price: float,
        category: str,
        file_size_mb: int,
        license_type: str,
    ) -> None:
        super().__init__(name, price, category)
        self.file_size_mb = file_size_mb
        self.license_type = license_type

    def download(self) -> str:
        return (
            f"Downloading {self.name} "
            f"({self.file_size_mb} MB, license: {self.license_type})."
        )

    def get_shipping_cost(self) -> float:
        return 0.0

    def describe(self) -> str:
        return (
            f"{self.name} is a digital product. It can be delivered "
            f"instantly with no shipping fee."
        )

    def __str__(self) -> str:
        return (
            f"DigitalProduct(name='{self.name}', price=${self.price:.2f}, "
            f"category='{self.category}', file_size_mb={self.file_size_mb}, "
            f"license_type='{self.license_type}')"
        )


def build_sample_catalog() -> List[Product]:
    return [
        PhysicalProduct(
            name="Mechanical Keyboard",
            price=89.99,
            category="Accessories",
            weight_kg=0.9,
            stock=12,
        ),
        PhysicalProduct(
            name="27-inch Monitor",
            price=249.50,
            category="Electronics",
            weight_kg=4.8,
            stock=5,
        ),
        DigitalProduct(
            name="UI Design Course",
            price=39.90,
            category="Education",
            file_size_mb=780,
            license_type="personal",
        ),
        DigitalProduct(
            name="Icon Pack Pro",
            price=19.00,
            category="Design Assets",
            file_size_mb=120,
            license_type="commercial",
        ),
    ]
