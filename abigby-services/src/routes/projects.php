<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

//GET All PROJECTS
$app->get('/api/projects', function(Request $request, Response $response){
  // echo 'PROJECTS';
  $sql = "SELECT * FROM projects";

  try {
    //Get DB Object
    $db = new db();

    //Connect
    $db = $db->connect();

    //Prepared Statement
    $stmt = $db->query($sql);
    $projects = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;

    //convert data to JSON
    echo json_encode($projects);

  } catch(PDOException $e) {
      echo '{"error": {"text": '.$e->getMessage().'}';
  }
});


//GET SINGLE PROJECT
$app->get('/api/project/{id}', function(Request $request, Response $response){

  // echo 'PROJECT';

  $id = $request->getAttribute('id');

  $sql = "SELECT * FROM projects WHERE id = $id";

  try {
    //Get DB Object
    $db = new db();

    //Connect
    $db = $db->connect();

    //Prepared Statement
    $stmt = $db->query($sql);
    $project = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;

    //convert data to JSON
    echo json_encode($project);

  } catch(PDOException $e) {
      echo '{"error": {"text": '.$e->getMessage().'}';
  }
});


//POST - ADD A PROJECT
$app->post('/api/project/add', function(Request $request, Response $response){

  //FIELDS
  $banner_url = $request->getParam('banner_url');
  $company = $request->getParam('company');
  $description = $request->getParam('description');
  $project_link = $request->getParam('project_link');
  $published_date = $request->getParam('published_date');
  $skills_used = $request->getParam('skills_used');
  $subtitle = $request->getParam('subtitle');
  $thumbnail_url = $request->getParam('thumbnail_url');
  $title = $request->getParam('title');
  $type = $request->getParam('type');

  // echo 'PROJECT';

  $sql = "INSERT INTO projects (title, subtitle, thumbnail_url, banner_url, skills_used, description, published_date, company, project_link, type) VALUES (:title, :subtitle, :thumbnail_url, :banner_url, :skills_used, :description, :published_date, :company, :project_link, :type)";

  try {
    //Get DB Object
    $db = new db();
    //Connect
    $db = $db->connect();

    //Prepared Statements
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':title',          $title);
    $stmt->bindParam(':subtitle',       $subtitle);
    $stmt->bindParam(':thumbnail_url',  $thumbnail_url);
    $stmt->bindParam(':banner_url',     $banner_url);
    $stmt->bindParam(':skills_used',    $skills_used);
    $stmt->bindParam(':description',    $description);
    $stmt->bindParam(':published_date', $published_date);
    $stmt->bindParam(':company',        $company);
    $stmt->bindParam(':project_link',   $project_link);
    $stmt->bindParam(':type',           $type);


    $stmt->execute();

        //Prints Success Message
    echo '{"notice": {"text":"Project Added"}';

  } catch(PDOException $e) {
        //Prints Error Message
      echo '{"error": {"text": '.$e->getMessage().'}';
  }
});


//PUT - UPDATE A PROJECT
$app->put('/api/project/update/{id}', function(Request $request, Response $response){
  $id = $request->getAttribute('id');

  //FIELDS
  $banner_url = $request->getParam('banner_url');
  $company = $request->getParam('company');
  $description = $request->getParam('description');
  $project_link = $request->getParam('project_link');
  $published_date = $request->getParam('published_date');
  $skills_used = $request->getParam('skills_used');
  $subtitle = $request->getParam('subtitle');
  $thumbnail_url = $request->getParam('thumbnail_url');
  $title = $request->getParam('title');
  $type = $request->getParam('type');

  // echo 'PROJECT';

  $sql = "UPDATE projects SET
                 title          = :title,
                 subtitle       = :subtitle,
                 thumbnail_url  = :thumbnail_url,
                 banner_url     = :banner_url,
                 skills_used    = :skills_used,
                 description    = :description,
                 published_date = :published_date,
                 company        = :company,
                 project_link   = :project_link,
                 type           = :type

                 WHERE id = $id";

  try {
    //Get DB Object
    $db = new db();
    //Connect
    $db = $db->connect();

    //Prepared Statements
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':title',          $title);
    $stmt->bindParam(':subtitle',       $subtitle);
    $stmt->bindParam(':thumbnail_url',  $thumbnail_url);
    $stmt->bindParam(':banner_url',     $banner_url);
    $stmt->bindParam(':skills_used',    $skills_used);
    $stmt->bindParam(':description',    $description);
    $stmt->bindParam(':published_date', $published_date);
    $stmt->bindParam(':company',        $company);
    $stmt->bindParam(':project_link',   $project_link);
    $stmt->bindParam(':type',           $type);

    $stmt->execute();

    //Prints Success Message
    echo '{"notice": {"text":"Project Updated"}';

  } catch(PDOException $e) {
        //Prints Error Message
      echo '{"error": {"text": '.$e->getMessage().'}';
  }
});


//DELETE SINGLE PROJECT
$app->delete('/api/project/delete/{id}', function(Request $request, Response $response){

  // echo 'PROJECT';

  $id = $request->getAttribute('id');

  $sql = "DELETE FROM projects WHERE id = $id";

  try {
    //Get DB Object
    $db = new db();

    //Connect
    $db = $db->connect();

    //Prepared Statement
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $db = null;

    //prints Success Message
    echo '{"notice": {"text":"Project Deleted"}';

  } catch(PDOException $e) {
      echo '{"error": {"text": '.$e->getMessage().'}';
  }
});
