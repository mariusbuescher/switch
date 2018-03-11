<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', []);
    }

    /**
     * @Route("/add", name="add")
     */
    public function addAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/add.html.twig', []);
    }

    /**
     * @Route("/add-details", name="add-details")
     */
    public function addDetailsAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/add-details.html.twig', []);
    }

    /**
     * @Route("/details", name="details")
     */
    public function detailsAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/details.html.twig', []);
    }

    /**
     * @Route("/marketplace", name="marketplace")
     */
    public function marketPlaceAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/marketplace.html.twig', []);
    }

    /**
     * @Route("/marketplace-item", name="marketplaceItem")
     */
    public function marketPlaceItemAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/marketPlace-item.html.twig', []);
    }
}
