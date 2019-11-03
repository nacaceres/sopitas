# sopitas

Web page - ecommerce

## Start

To start this proyect, first you need to run MongoDB with replica

```
mongod --replSet "rs
```

If it is the first time you do it you should initiate the replica, in a new terminal window run

```
mongo
```

You should see the next line

```
rs:PRIMARY>
```

To initiate it if you don't see that (if you have it already initiate you can also run it again) just run

```
rs.initiate()
```

The result should llok like this:

```
{
	"operationTime" : Timestamp(1572794307, 1),
	"ok" : 0,
	"errmsg" : "already initialized",
	"code" : 23,
	"codeName" : "AlreadyInitialized",
	"$clusterTime" : {
		"clusterTime" : Timestamp(1572794307, 1),
		"signature" : {
			"hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
			"keyId" : NumberLong(0)
		}
	}
}
```

To run the proyect

```bash
# To run the backend, on the root folder (new terminal window)
yarn start

# To run the front end (new terminal window)
cd front && yarn start
```
