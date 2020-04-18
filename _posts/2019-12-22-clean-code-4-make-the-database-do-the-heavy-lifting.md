---
toc: true
layout: post
description: 
categories: [Medium]
title: Clean Code 4  Make the database do the heavy lifting
---

#### Clean Code #4

# Rule of thumb: Avoid filtering loops

SQL/Databases are good at 2 jobs: storing data. filtering data as fast as possible. **You're for loop cannot compete with SQL.**

The performance of your program will be much faster if you let SQL manage the filtering of data. Plus it will also result in a smaller line of code.

Try to filter with smaller queries with a smaller number of columns before fetching all the columns. Smaller the data, the faster will be the data transfer. You will find a better example of this in the section of Complex Queries bellow.

# **Use ORM**

For Spring (Java), ideally, use JPA method query things.**\*\*\***

![Source: [JPA Repositories Spring.io](https://docs.spring.io/spring-data/jpa/docs/1.6.0.RELEASE/reference/html/jpa.repositories.html#jpa.query-methods)](https://cdn-images-1.medium.com/max/NaN/1*zFdnxfeVJjlSsMTf_w6ZFQ.png)

_Tips: Use tools to make Entities POJO: [https://www.youtube.com/watch?v=LrbaDRcu3Y0](https://www.youtube.com/watch?v=LrbaDRcu3Y0)_

For Python, SQLAlchemy is popular and preferred or Django ORM for Django. (I have less experience with this)

# Complex queries

In the case of Java, you can also JPA specific things like Specifications or Criteria API.

Honestly, I haven’t tried them I know they exist. I have seen them and found that the code looked really ugly

I do find Django ORM to be easier than Spring JPA (you can pass arguments rather than always create a separate function).

#### Break down big-bang (complex) queries into multiple simpler queries

**\* This might be very controversial and I have not seen this talked about anywhere or used in other people’s code. **You are not likely to use this unless you are like me (bad at ORMs).\*\*\*

Many times you have a complex feature like search and you want to filter by multiple parameters.

What usually ends up happening you end up with a custom query generator or Criteria API (Java) or a query which is too long. Especially if this query requires additional features like ordering and pagination.

I think a simpler solution is to break it into smaller queries. I give a simplified example below.

Note that this is a much simpler version of what you would encounter but I think it will make the point.

There are 3 tables:

![](https://cdn-images-1.medium.com/max/1764/1*NF1SHsFTe30LAcA1_E4Ihw.png)

![](https://cdn-images-1.medium.com/max/2584/1*431KNZ9UVgdajXUl3CNWdA.png)

![](https://cdn-images-1.medium.com/max/2580/1*T2bpZ2wOlAdAQaW6qyz8lw.png)

**_Suppose you want to find who are male grandparents of children whose name start with ‘A’_**

You can go for some complex query like

![](https://cdn-images-1.medium.com/max/3164/1*75X7btaFCu1WIsr7kn1K0Q.png)

![Output](https://cdn-images-1.medium.com/max/484/1*_77Yv8zDeWB0AGi0vJBSIg.png)

These 33 lines can quickly increase in size when you have too many tables. Multiple shorter queries are always much better than one **big bang query**.

I’ve seen queries which go beyond 100 lines 😖

**Making changes in such large 100+ line queries is a pain.**

(Even when writing the 33 line query above, I introduced bug by not writing join on lines 30 and 31. writing smaller queries helped me debug.)

You could break into something simpler queries like:

![](https://cdn-images-1.medium.com/max/2380/1*O516lxu-uDib3jIf6LOWlQ.png)

![](https://cdn-images-1.medium.com/max/156/1*0qxyXQX2fRscvlMnK44jqA.png)

![](https://cdn-images-1.medium.com/max/2368/1*n6Apvygj0rrR_dXnmbV_3A.png)

![](https://cdn-images-1.medium.com/max/292/1*DPliVI-J4CA7gwbEbjAykQ.png)

![](https://cdn-images-1.medium.com/max/2364/1*p22YYkOqyTYurOKvQMymUw.png)

![](https://cdn-images-1.medium.com/max/548/1*snRet2ZLeb2snOBUUyIV7Q.png)

![](https://cdn-images-1.medium.com/max/2372/1*95LaDFaSAUvCKlI4W0yAsQ.png)

![](https://cdn-images-1.medium.com/max/464/1*ccfP3npCRgsMweMrZUU6vQ.png)

Then code the method yourself to call these in a certain sequence:

![](https://cdn-images-1.medium.com/max/3372/1*NtGsnQZoQY6b6LSfmG9xuA.png)

You will find that even though your line of code has increased, the modularity of code has also increased and these functions can be arranged in any way you like.

---

**Previous**: [Avoid creating god classes and long methods](https://medium.com/p/f3d76b1b622a)

**Next**: [Remove unnecessary code](https://medium.com/p/c477707e5be1)

**Index**: [Tips on writing Clean Code](https://medium.com/p/30d717f32ae4)