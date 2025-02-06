- dict를 key, value로 순회 가능
- key를 구조 분해 할당 가능
```python
data = {
    ("apple", 10): "fruit",
    ("carrot", 5): "vegetable",
    ("banana", 7): "fruit"
}

for (name, count) in data:
    print(f"Name: {name}, Count: {count}, Category: {data[(name, count)]}")

for (name, count), category in data.items():
    print(f"Name: {name}, Count: {count}, Category: {category}")
```
- 아래는 동일한 표현 () 생략
```python
data[(name, count)]
data[name, count]
```