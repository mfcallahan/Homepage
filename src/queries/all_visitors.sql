SELECT*
FROM [dbo].[Visitors]
WHERE VisitorIsp <> 'Googlebot'
ORDER BY ID DESC